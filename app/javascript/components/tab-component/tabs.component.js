
function TabsController() {
  this.panes = [];

  this.select = function(pane) {
    angular.forEach(panes, pane => {
      pane.selected = false;
    });
    pane.selected = true;
  }

  this.addPane = pane => {
    if (panes.length === 0) {
      this.select(pane)
    }
    panes.push(pane)
  }
}

module.exports = {
    transclude: true,
    controller: TabsController,
    template: require("html-loader!./tabs.html")
}
