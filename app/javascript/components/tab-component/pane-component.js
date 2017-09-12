export const paneComponent {
    var panes = {
      transclude: true,
      require: {
        TabsController: '^tabs'
      },
      bindings: {
        title: '@'
      },
      controller: PaneController,
      template: require("html-loader!.pane.html")
}
