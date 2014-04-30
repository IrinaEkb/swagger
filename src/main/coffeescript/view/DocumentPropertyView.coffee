class DocumentPropertyView extends Backbone.View
  initialize: =>

  render: =>
    @model.numeric = if @model.dataType == 'number' || @model.dataType == 'integer' then 'numeric' else ''

    if @model.value
        @model.defaultValue = @model.value

    if @model.dataType == 'boolean'
        @model.selectValues = []
        unless @model.required
            @model.selectValues.push
                name: 'undefined'
                value: ''
                isDefault: undefined == @model.defaultValue
        @model.selectValues.push
            name: 'True'
            value: 'true'
            isDefault: true == @model.defaultValue
        @model.selectValues.push
            name: 'False'
            value: 'false'
            isDefault: false == @model.defaultValue

    if @model.values
        @model.selectValues = []
        unless @model.required
            @model.selectValues.push
                name: 'undefined'
                value: ''
                isDefault: undefined == @model.defaultValue
        for value in @model.values
            @model.selectValues.push
                name: if value == null then 'null' else value
                value: if @model.numeric then parseFloat value else JSON.stringify value
                isDefault: value == @model.defaultValue

    @$el.html Handlebars.templates.property @model

    @

