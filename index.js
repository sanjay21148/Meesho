const product_list = [
    {
        "id": 1,
        "image":"https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMHNoaXJ0fGVufDB8fDB8fHww",
        "price": '₹999',
        "description": "Mens Cotton Shirt"
    },
    {
        "id": 2,
        "image": "./assets/img2.png",
        "price": '₹1299.00',
        "description": "This is product 1",
    },
    {
        "id": 3,
        "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
        "price": '₹5229.00',
        "description": "This is product 1",
    },
    {
        "id": 4,
        "image": "https://i.pinimg.com/236x/ca/74/71/ca74712d63e1c4cca0dfa966fce5621c.jpg",
        "price": '₹2824.00',
        "description": "This is product 1",
    },
    {
        "id": 5,
        "image": "https://images.unsplash.com/photo-1668279580408-9120c463e98d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
        "price": '₹4384.00',
        "description": "This is product 1",
    },
    {
        "id": 6,
        "image": "https://images.mehar.com/category_images/img1_1713508080_shorts.jpg",
        "price": '₹8333.00',
        "description": "This is product 1",
    },
    {
        "id": 7,
        "image": "https://images.mehar.com/product_thumbnail1/1719637099-1.jpg",
        "price": '₹1483.00',
        "description": "This is product 1",
    },
    {
        "id": 8,
        "image": "https://images.mehar.com/product_thumbnail1/1736247442-1.jpg",
        "price": '₹2489.00',
        "description": "This is product 1",
    },
    {
        "id": 9,
        "image": "https://images.mehar.com/hpg_home_page_images/a378c50a08c1e134dbf068a22976b0b5.jpg",
        "price": '₹3458.00',
        "description": "This is product 1",
    },
    {
        "id": 10,
        "image": "https://images.mehar.com/product_thumbnail1/1700806072-1.jpg",
        "price": '₹1294.00',
        "description": "This is product 1",
    },
    {
        "id": 11,
        "image": "https://images.mehar.com/product_thumbnail1/1686207610-1.jpg",
        "price": '₹2584.00',
        "description": "This is product 1",
    },
    {
        "id": 12,
        "image": "https://i.pinimg.com/236x/b8/eb/f0/b8ebf0879dc3eb52a2225b4ce56777ba.jpg",
        "price": '₹3489.00',
        "description": "This is product 1",
    },
    {
        "id": 13,
        "image": "https://i.pinimg.com/236x/c0/be/3b/c0be3be02cb99e79e0e8c7d61493ae58.jpg",
        "price": '₹1353.00',
        "description": "This is product 1",
    },
    {
        "id": 14,
        "image": "https://i.pinimg.com/236x/74/3a/80/743a80daaaebb36a2eecdf1a403f2da1.jpg",
        "price": '₹2438.00',
        "description": "This is product 1",
    },
    {
        "id": 15,
        "image": "https://i.pinimg.com/236x/dd/de/14/ddde149b1134c4387cd174a99b8d2e31.jpg",
        "price": "2438",
        "description": "This is product 1",
    },
    {
        "id": 16,
        "image": "https://i.pinimg.com/474x/6a/0e/41/6a0e41fa2b86bebe95a40d476fb94bf7.jpg",
        "price": "2431",
        "description": "This is product 1",
    }
];

 const productcontainer=document.getElementById('home-product');
 product_list.forEach((product)=>{
 const product_card=document.createElement('div') 
 product_card.classList.add('sample_product')
 productcontainer.appendChild(product_card)

 const product_link=document.createElement('a')
 product_link.classList.add('product_link')
 product_card.appendChild(product_link)

 const innerProduct=document.createElement('div')
 innerProduct.classList.add('product_image')
 product_link.appendChild(innerProduct)

 const productImage=document.createElement('img')
 productImage.src=product.image
 innerProduct.appendChild(productImage)

 const product_detail=document.createElement('div')
 product_detail.classList.add('product_description')
 product_link.appendChild(product_detail)

 
 const product_name=document.createElement('p')
 product_name.innerHTML=product.description
 product_detail.appendChild( product_name)

 const product_price=document.createElement('p')
 product_price.innerHTML=product.price
 product_detail.appendChild(product_price)

 const button_container=document.createElement('div')
 button_container.classList.add('button_container')
 product_detail.appendChild(button_container)

 const product_button=document.createElement('button')
 product_button.classList.add('product_button')
 product_button.innerHTML="Buy"
 button_container.appendChild(product_button)

 
 const cart_button=document.createElement('button')
 cart_button.classList.add('cart_button')
 cart_button.innerHTML="Add to cart"
 button_container.appendChild(cart_button)

 
})

let cartCount=0;
document.querySelectorAll('.cart_button').forEach((button) => {
    button.addEventListener('click' , () =>{
        cartCount++;
        document.getElementById('cartCount').innerHTML=cartCount;
    });
});