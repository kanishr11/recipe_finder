async function Display(){
    const app_key = '1cb9938e26e54b68f411d80d5f40b7c8';
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=25a0b439&app_key=${app_key}`);
    const data = response.json();
    console.log(data);

}

Display();