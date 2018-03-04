export class Frame {
    constructor(public text: string, public state = 'inactive') { }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}