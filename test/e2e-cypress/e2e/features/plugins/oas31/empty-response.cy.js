/**
 * @prettier
 */

describe("OAS 3.1 Empty response", () => {
  it("should not render an example for empty reponse", () => {
    cy.visit(
      "/?configUrl=/configs/default-model-rendering-model.yaml&url=/documents/features/oas31-empty-response.yaml"
    )
      .get("#operations-default-get_")
      .click()
      .get(
        "#operations-default-get_ [data-code=200] .response-col_description__inner"
      )
      .contains("no content")
      .get("#operations-default-get_ [data-code=200] .model-example")
      .should("not.exist")
      .get(
        "#operations-default-get_ [data-code=201] .response-col_description__inner"
      )
      .contains("no schema but an example")
      .get("#operations-default-get_ [data-code=201] .model-example")
      .contains('"foo": "bar"')
      .should("exist")
      .get(
        "#operations-default-get_ [data-code=202] .response-col_description__inner"
      )
      .contains("no schema but examples")
      .get("#operations-default-get_ [data-code=202] .model-example")
      .contains('"foo": "bar"')
      .should("exist")
      .get(
        "#operations-default-get_ [data-code=203] .response-col_description__inner"
      )
      .contains("no schema no example")
      .get("#operations-default-get_ [data-code=203] .model-example")
      .should("not.exist")
  })
})
