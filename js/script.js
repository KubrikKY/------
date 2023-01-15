let eventMixin = {
    on (eventName, eventGo) {
      if (!this._eventHandler) this._eventHandler = {};
      if (!this._eventHandler[eventName]) this._eventHandler[eventName] = [];
      this._eventHandler[eventName].push(eventGo); 
    },
  
    off (eventName, eventGo) {
      let handlers = this._eventHandler && this._eventHandler[eventName];
      if (!handlers) return;
  
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] = eventGo) {
          handlers.splice(i--, 1);
        }
      }
    },
  
    trigger (eventName, ...args) {
      if (!this._eventHandler || !this._eventHandler[eventName]) return;
      this._eventHandler[eventName].forEach(eventGo => {
        eventGo.apply(this, args);
      });
    }
  }
  
  class Menu {
    constructor (name) {
      this.name = name;
    }
    choose (value) {
      this.trigger('select', value);
    }
  }
  
  Object.assign(Menu.prototype, eventMixin);
  
  let newMenu = new Menu('Ivan');
  
  newMenu.on('select', value => console.log(this.name + " " + value));
  
  newMenu.choose('hello');