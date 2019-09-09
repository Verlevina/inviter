const mongoose = require('mongoose');

const MarkupTemplatesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  bgImage: {
    type: String,
    required: true
  },
  topText: {
    color: {
      type: String,
      required: true
    },
    text: {
      type: String
    },
    font: {
      link: {

        type: String,
        required: true
      },
      ff: {
        type: String,
        required: true
      },
      fs: {
        type: String,
        required: true
      }

    }
  },
  names: {
    color: {
      type: String,
      required: true
    },
    font: {
      type: String,
      required: true
    }
  },
  leftImage: {
    type: String,
    required: true
  },
  bottomText: {
    text: {
      type: String
    },
    color: {
      type: String,
      required: true
    },
    font: {
      type: String,
      required: true
    }
  },
  baseText: {
    text: {
      type: String
    },
    color: {
      type: String,
      required: true
    },
    font: {
      type: String,
      required: true
    }
  },
  rightImage: {
    type: String,
    required: true
  },
  textForm: {
    color: {
      type: String,
      required: true
    },
    colors: {
      primary: {
        type: String,
        required: true
      },

      secondary: {
        type: String,
        required: true
      },

      success: {
        type: String,
        required: true
      },

      danger: {
        type: String,
        required: true
      },

      warning: {
        type: String,
        required: true
      },

      info: {
        type: String,
        required: true
      },

      light: {
        type: String,
        required: true
      },

      dark: {
        type: String,
        required: true
      },

      body: {
        type: String,
        required: true
      },

      muted: {
        type: String,
        required: true
      },

      white: {
        type: String,
        required: true
      },

      black: {
        type: String,
        required: true
      },
    }
  }
})
module.exports = mongoose.model('MarkupTemplatesSchema', MarkupTemplatesSchema)