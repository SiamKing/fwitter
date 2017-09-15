
function PaneController() {

  this.$onInit = () => {
    this.TabsController.addPane(this)
  }
}

module.export = {
  transclude: true,
  require: {
    TabsController: '^tabs'
  },
  bindings: {
    title: '@'
  },
  controller: PaneController,
  template: require("html-loader!./pane.html")
}
