<template>
  <div class="restaurant--card w-[32%] h-[30vh] border rounded-xl flex flex-col items-center justify-center shadow-gray-400 shadow-md hover:shadow-blue-400 transition duration-500 hover:border-blue-200">
    <div class="restaurant--image flex h-[70%] w-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] rounded-t-xl shadow-gray-500 shadow-md"></div>
    <div class="restaurant--info h-1/3 w-full p-2">
        <div class="info-top flex w-full">
            <p class="name flex-1 text-shadow shadow-gray-400">Nom</p>
            <p class="note min-w-[8%] bg-green-700 rounded-full text-center shadow-md shadow-green-700 text-gray-300">8.9</p>
        </div>
        <div class="info-bottom flex w-full pt-2 space-x-4 text-sm">
            <p class="delivery-time text-shadow shadow-gray-400 text-xs" ><font-awesome-icon icon="bicycle"/><span class="text-sm pl-1">15 - 20 min</span></p>
            <p class="restaurant-price-tag text-yellow-500 text-shadow-sm shadow-yellow-500">€€</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  
</style>