// Giorgio Timothy Suharianto
// JSCRIPT 320 - Week 1

// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

// Export class here
export default HTMLElement;
