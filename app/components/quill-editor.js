import Ember from 'ember';
import Quill from 'npm:quill';
import ImageResize from '../scripts/quill-image-resize-module';
import ImageDrop from '../scripts/quill-image-drop-module';

Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);

export default Ember.Component.extend({
  tagName: 'main',
  bindAttributes: ['class'],
  readonly: false,
  seamless: false,

  init(){
    this._super(...arguments);
    this.onChangeCallback = this.onChangeCallback.bind(this);
  },

  onChangeCallback() {
    var onChange = this.get('onChange');
    onChange(this.quill);
  },

  didRender(){

    // Render only once. ops will come in again.
    if (this._hasRendered) return;
    this._hasRendered = true;

    this.quill = new Quill('#quill-editor', {
      theme: this.get('seamless') ? "bubble" : "snow",
      handlers: {},
      readOnly: this.get('readonly') || this.get('seamless'),
      placeholder: "Draft your local mission statement...",
      modules: {
        imageResize: !this.get('seamless'),
        imageDrop: !this.get('seamless'),

        toolbar: [
          [{header: [1, 2, 3, false]}],
          // [{ 'size': ['small', false, 'large'] }],  // custom dropdown
          ["bold", "italic", "underline", "strike"],
          ['blockquote', 'code-block'],
          [{"color": []}, { 'background': [] }],
          [{"align": []}],
          [{"list": "ordered"}, {"list": "bullet"}],
          [{"indent": "-1"}, {"indent": "+1"}],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          ["link", "image"],
          ["clean"]
        ]
      }
    });

    this.quill.updateContents(this.get('ops'));
    this.quill.on('text-change', this.onChangeCallback);
  },

  willDestroyElement(){
    this.quill.off('text-change', this.onChangeCallback);
    delete this.quill;
  }
});
