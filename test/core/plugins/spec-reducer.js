/* eslint-env mocha */
import expect from "expect"
import { fromJS } from "immutable"
import reducer from "corePlugins/spec/reducers"

describe("spec plugin - reducer", function(){

  describe("update operation value", function() {
    it("should update the operation at the specified key", () => {
      const updateOperationValue = reducer["spec_UPDATE_OPERATION_META_VALUE"]

      const state = fromJS({
        resolved: {
          "paths": {
            "/pet": {
              "post": {
                "description": "my operation"
              }
            }
          }
        }
      })

      let result = updateOperationValue(state, {
        payload: {
          path: ["/pet", "post"],
          value: "application/json",
          key: "consumes_value"
        }
      })

      let expectedResult = {
        resolved: {
          "paths": {
            "/pet": {
              "post": {
                "description": "my operation",
                "consumes_value": "application/json"
              }
            }
          }
        }
      }

      expect(result.toJS()).toEqual(expectedResult)
    })

    it("shouldn't throw an error if we try to update the consumes_value of a null operation", () => {
      const updateOperationValue = reducer["spec_UPDATE_OPERATION_META_VALUE"]

      const state = fromJS({
        resolved: {
          "paths": {
            "/pet": {
              "post": null
            }
          }
        }
      })

      let result = updateOperationValue(state, {
        payload: {
          path: ["/pet", "post"],
          value: "application/json",
          key: "consumes_value"
        }
      })

      expect(result.toJS()).toEqual(state.toJS())
    })
  })

  describe("set response value", function() {
    it("should combine the response and error objects", () => {
      const setResponse = reducer["spec_set_response"]

      const path = "/pet/post"
      const method = "POST"

      const state = fromJS({})
      const result = setResponse(state, {
        payload: {
          path: path,
          method: method,
          res: {
            error: true,
            err: {
              message: "Not Found",
              name: "Error",
              response: {
                data: "response data",
                headers: {
                  key: "value"
                },
                ok: false,
                status: 404,
                statusText: "Not Found"
              },
              status: 404,
              statusCode: 404
            }
          }
        }
      })

      let expectedResult = {
        error: true,
        message: "Not Found",
        name: "Error",
        data: "response data",
        headers: {
          key: "value"
        },
        ok: false,
        status: 404,
        statusCode: 404,
        statusText: "Not Found"
      }

      const response = result.getIn(["responses", path, method]).toJS()
      expect(response).toEqual(expectedResult)
    })
  })
})
