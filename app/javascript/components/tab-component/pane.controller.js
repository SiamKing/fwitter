export default class PaneController {
  constructor() {

  }
  $onInit = () => {
    this.TabsController.addPane(this)
  }
}
