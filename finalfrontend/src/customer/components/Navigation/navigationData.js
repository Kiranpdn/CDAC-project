export const navigation = {
  categories: [
    {
      id: 'Solar_products',
      name: 'Solar Products',
      featured: [
        {
          name: 'Solar Panels',
          href: '/',
          imageSrc: 'https://img.freepik.com/free-psd/solar-power-boards-3d-realistic-render_625553-173.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Solar Inverter',
          href: '/',
          imageSrc: 'https://img3.exportersindia.com/product_images/bc-full/2018/7/5769687/solar-inverters-1531471303-4097980.jpeg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'solar_panels',
          name: 'Solar Panels',
          items: [
            { name: 'Technology_Mono Panels', id:"top", href: `{women/clothing/tops}` },
            { name: 'Technology_Poly Panels', id:"women_dress", href: '#' },
            { name: 'Voltage_12V', id: 'women_jeans' },
            { name: 'Voltage_24V', id: 'lengha_choli' },
            { name: 'Wattage_ 150 - 250 watts', id: 'sweater' },
            { name: 'Wattage_ 50 - 150 watts', id: 't-shirt' },
            { name: 'Wattage_ Upto 50 watts', id: 'jacket' },
            { name: 'Wattage_ 350 - 440 watts', id: 'gouns' },
            { name: 'Wattage_ 250 - 350 watts', id: 'saree' },
            { name: 'Wattage_ 350 - 450 watts', id: 'kurtas' },
          ],
        },
        {
          id: 'solar_inverters',
          name: 'Solar Inverters',
          items: [
            { name: 'Installation_Hospital', id: 'watch' },
            { name: 'Inverter type_Off grid hybrid', id: 'wallet' },
            { name: 'Inverter type_On grid', id: 'bag' },
            { name: 'Solar Inverter', id: 'sunglasse' },
            { name: 'System Type_Off grid', id: 'hat' },
            { name: 'Technology_Mppt', id: 'belt' },
          ],
        },
        {
          id: 'lithium_battery',
          name: 'Lithium Battery',
          items: [
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Significant Other', id: '#' },
          ],
        },
      ],
    },
    {
      id: 'EV_Products',
      name: 'EV Products',
      featured: [
        {
          name: 'EV Charger',
          id: '#',
          imageSrc: 'https://www.melitron.com/wp-content/uploads/2022/05/MelitronEVCharger22.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'EV Charger',
          id: '#',
          imageSrc: 'https://greensync.com/wp-content/uploads/2019/03/bigstock-Power-Supply-For-Electric-Car-203739682-696x464.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Mens Kurtas', id: 'mens_kurta' },
            { name: 'Shirt', id: 'shirt' },
            { name: 'Men Jeans', id: 'men_jeans' },
            { name: 'Sweaters', id: '#' },
            { name: 'T-Shirts', id: 't-shirt' },
            { name: 'Jackets', id: '#' },
            { name: 'Activewear', id: '#' },
            
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: '#' },
            { name: 'Wallets', id: '#' },
            { name: 'Bags', id: '#' },
            { name: 'Sunglasses', id: '#' },
            { name: 'Hats', id: '#' },
            { name: 'Belts', id: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', id: '/' },
    { name: 'Stores', id: '/' },
  ],
}