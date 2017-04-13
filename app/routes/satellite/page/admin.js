import Ember from 'ember';

export default Ember.Route.extend({
  options: {
    theme: "snow",
    placeholder: 'Compose your email...',
    modules: {
      toolbar: [
        [{header: [2, 3, 4, false]}],
        ["bold", "italic", "underline", "strike"],
        [{"color": []}],
        [{"list": "ordered"}, {"list": "bullet"}],
        [{"indent": "-1"}, {"indent": "+1"}],
        [{"align": []}],
        ["link"],
        ["clean"]
      ]
    }
  },

  actions: {
    updateText(editor) {
      this.attrs.update(editor.root.innerHTML);
    }
  }
});
