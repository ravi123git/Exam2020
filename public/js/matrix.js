function mapdata() {

  let nodes = [];
  let edges = [];

  let n = 3;

  for(let i =0; i < n; i++){
    for(let j = 0; j < n; j++){
      let node = {
        "data": {
          "id": `N${i}-${j}`
        }
      }
      nodes.push(node);
    }
  }

  for(let i =0; i < n; i++){
    for(let j = 0; j < n; j++){

      
      if(j>0){
        let edge = {
          "data": {
            "id": `E${i}-${j}`,
            "source": `N${i}-${j}`,
            "target": `N${i}-${j-1}`
          }
        }
        edges.push(edge);
      }

      if(j<n-1){
        let edge = {
          "data": {
            "id": `F${i}-${j}`,
            "source": `N${i}-${j}`,
            "target": `N${i}-${j+1}`
          }
        }
        edges.push(edge);
      }

      if(i>0){
        let edge = {
          "data": {
            "id": `G${i}-${j}`,
            "source": `N${i}-${j}`,
            "target": `N${i-1}-${j}`
          }
        }
        edges.push(edge);
      }

      if(i<n-1){
        let edge = {
          "data": {
            "id": `H${i}-${j}`,
            "source": `N${i}-${j}`,
            "target": `N${i+1}-${j}`
          }
        }
        edges.push(edge);
      }

      if(j<n-1 && i<n-1){
        let edge = {
          "data": {
            "id": `M${i}-${j}`,
            "source": `N${i}-${j}`,
            "target": `N${i+1}-${j+1}`
          }
        }
        edges.push(edge);
      }

      if(j>0 && i>0){
        let edge = {
          "data": {
            "id": `Q${i}-${j}`,
            "source": `N${i}-${j}`,
            "target": `N${i-1}-${j-1}`
          }
        }
        edges.push(edge);
      }

      if(i>0 && j<n-1){
        let edge = {
          "data": {
            "id": `O${i}-${j}`,
            "source": `N${i}-${j}`,
            "target": `N${i-1}-${j+1}`
          }
        }
        edges.push(edge);
      }

      if(i<n-1 && j<n && j>0){
        let edge = {
          "data": {
            "id": `P${i}-${j}`,
            "source": `N${i}-${j}`,
            "target": `N${i+1}-${j-1}`
          }
        }
        edges.push(edge);
      }

    }
  } 

  console.log(nodes.length);
   console.log(edges.length);

  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


