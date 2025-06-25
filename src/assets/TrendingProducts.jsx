import React from 'react'

export default function TrendingProducts() {

     const products = [
    { key: 'acne', title: 'Acne Serum', price: 'Rs. 990.00', oldPrice: 'Rs. 1,090.00', image: 'https://ext.same-assets.com/3220550431/1769487706.jpeg', link: '/product' },
    { key: 'antiaging', title: 'Advanced Antiaging Serum', price: 'Rs. 1,790.00', oldPrice: 'Rs. 1,890.00', image: 'https://ext.same-assets.com/3220550431/3876667186.jpeg', link: '/product' },
    { key: 'brightening', title: 'Brightening Serum', price: 'Rs. 1,099.00', oldPrice: 'Rs. 1,299.00', image: 'https://ext.same-assets.com/3220550431/3485152667.jpeg', link: '/product' },
    { key: 'bbserum', title: 'Super Shield BB Serum', price: 'Rs. 599.00', oldPrice: 'Rs. 699.00', image: 'https://ext.same-assets.com/3220550431/1670275257.jpeg', link: '/product' },
  ];

  return (
    <div>

        <section className="py-5 bg-light">
      <div className="container">
        <h3 className="mb-4 font-weight-bold">Trending Products</h3>
        <div className="row">
          {products.map((p) => (
            <div className="col-6 col-md-3 mb-4" key={p.key}>
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </div>
  )
}
