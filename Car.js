AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" }
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});

AFRAME.registerComponent('move',
    {
        schema: { moveX: { type: 'number', default: 1 } },
         
        tick: function () { 
            window.addEventListener("click", (e)=>{
                this.data.moveX -= 0.000001
            })
           
            var pos = this.el.getAttribute('position') 
            pos.x = this.data.moveY
            this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z })
    }

})
