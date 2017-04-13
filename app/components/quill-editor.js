import Ember from 'ember';
import Quill from 'npm:quill';
import ImageResize from '../scripts/quill-image-resize-module';
import ImageDrop from '../scripts/quill-image-drop-module';
import ButtonDrop from '../scripts/quill-button-drop-module';

Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/buttonDrop', ButtonDrop);


let Block = Quill.import('blots/block');

var callback = function callback(){
  console.log('woo!', arguments)
}

class ButtonBlot extends Block {
  static create(value) {
    let node = super.create();
    console.log(arguments);
    debugger;
    node.innerHTML = 'Click me';
    node.setAttribute('href', value);
    node.setAttribute('contenteditable', 'true');
    node.addEventListener('focus', callback);
    node.classList.add('ql-button');
    return node;
  }

  replace(){
    debugger;
    this.domNode.innerHTML = '';
    super.replace.apply(this, arguments);
  }

  static formats(node) {
    // We will only be called with a node already
    // determined to be a Link blot, so we do
    // not need to check ourselves
    return node.getAttribute('href');
  }
}
ButtonBlot.blotName = 'button';
ButtonBlot.tagName = 'a';

Quill.register(ButtonBlot);

export default Ember.Component.extend({
  tagName: 'main',
  actions: {
    updateText(editor){
      console.log(editor);
    },
    onButtonDrag(e){
      console.log(e);
      e.dataTransfer.setData("text", 'button');
    }
  },
  didRender(){
    console.log(this);
    new Quill('#quill-editor', {
      theme: "bubble",
      handlers: {
        image(){
          debugger;
        }
      },
      placeholder: "Draft your email...",
      modules: {
        imageResize: true,
        imageDrop: true,
        buttonDrop: true,

        toolbar: [
          [{header: [1, 2, 3, false]}],
          [{ 'size': ['small', false, 'large'] }],  // custom dropdown
          ["bold", "italic", "underline", "strike"],
          ['blockquote', 'code-block'],
          [{"color": []}, { 'background': [] }],
          [{"list": "ordered"}, {"list": "bullet"}],
          [{"indent": "-1"}, {"indent": "+1"}],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{"align": []}],
          ["link", "image"],
          ["clean"]
        ]
      }
    });
  },
});
