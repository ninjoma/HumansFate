var gdjs;
(function(gdjs2) {
  class InventoryManager {
    static get(runtimeScene, name) {
      const game = runtimeScene.getGame();
      if (!game.inventories) {
        game.inventories = {};
      }
      let inventory = game.inventories[name];
      if (!inventory) {
        inventory = game.inventories[name] = new gdjs2.Inventory();
      }
      return inventory;
    }
  }
  gdjs2.InventoryManager = InventoryManager;
  let evtTools;
  (function(evtTools2) {
    let inventory;
    (function(inventory2) {
      inventory2.add = function(runtimeScene, inventoryName, name) {
        return InventoryManager.get(runtimeScene, inventoryName).add(name);
      };
      inventory2.remove = function(runtimeScene, inventoryName, name) {
        return InventoryManager.get(runtimeScene, inventoryName).remove(name);
      };
      inventory2.count = function(runtimeScene, inventoryName, name) {
        return InventoryManager.get(runtimeScene, inventoryName).count(name);
      };
      inventory2.has = function(runtimeScene, inventoryName, name) {
        return InventoryManager.get(runtimeScene, inventoryName).has(name);
      };
      inventory2.setMaximum = function(runtimeScene, inventoryName, name, maxCount) {
        return InventoryManager.get(runtimeScene, inventoryName).setMaximum(name, maxCount);
      };
      inventory2.setUnlimited = function(runtimeScene, inventoryName, name, enable) {
        return InventoryManager.get(runtimeScene, inventoryName).setUnlimited(name, enable);
      };
      inventory2.isFull = function(runtimeScene, inventoryName, name) {
        return InventoryManager.get(runtimeScene, inventoryName).isFull(name);
      };
      inventory2.equip = function(runtimeScene, inventoryName, name, equip2) {
        return InventoryManager.get(runtimeScene, inventoryName).equip(name, equip2);
      };
      inventory2.isEquipped = function(runtimeScene, inventoryName, name) {
        return InventoryManager.get(runtimeScene, inventoryName).isEquipped(name);
      };
      inventory2.serializeToVariable = function(runtimeScene, inventoryName, variable) {
        const allItems = gdjs2.InventoryManager.get(runtimeScene, inventoryName).getAllItems();
        for (const name in allItems) {
          const item = allItems[name];
          const serializedItem = variable.getChild(name);
          serializedItem.getChild("count").setNumber(item.count);
          serializedItem.getChild("maxCount").setNumber(item.maxCount);
          serializedItem.getChild("unlimited").setBoolean(item.unlimited);
          serializedItem.getChild("equipped").setBoolean(item.equipped);
        }
      };
      inventory2.unserializeFromVariable = function(runtimeScene, inventoryName, variable) {
        const inventory3 = gdjs2.InventoryManager.get(runtimeScene, inventoryName);
        inventory3.clear();
        const children = variable.getAllChildren();
        for (const name in children) {
          const serializedItem = children[name];
          inventory3.setCount(name, serializedItem.getChild("count").getAsNumber());
          inventory3.setMaximum(name, serializedItem.getChild("maxCount").getAsNumber());
          inventory3.setUnlimited(name, serializedItem.getChild("unlimited").getAsBoolean());
          inventory3.equip(name, serializedItem.getChild("equipped").getAsBoolean());
        }
      };
    })(inventory = evtTools2.inventory || (evtTools2.inventory = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=inventorytools.js.map
