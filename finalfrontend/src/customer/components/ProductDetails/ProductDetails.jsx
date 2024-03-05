import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { ButtonBase, Rating } from '@mui/material'
import { Button,Grid } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { solar_panels } from '../../../Data/solar_panels'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { useNavigate } from 'react-router-dom'


const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://www.loomsolar.com/cdn/shop/products/panel20_900x.jpg?v=1618828718',
            alt: 'Loom Solar Panel 20 watt - 12 volt.',
        },
        {
            src: 'https://www.loomsolar.com/cdn/shop/products/20wattfrontback-01_900x.jpg?v=1618828718',
            alt: 'loom-solar-20-watt-12-v-solar-panel.',
        },
        {
            src: 'https://www.loomsolar.com/cdn/shop/products/comparisonchart20_500x.jpg?v=1618828731',
            alt: 'loom-solar-20-watt-12-v-solar-panel.',
        },
        {
            src: 'https://www.loomsolar.com/cdn/shop/products/20wtech_1600x.jpg?v=1618910193',
            alt: 'loom-solar-20-watt-12-v-solar-panel.',
        },
    ],
    colors: [
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: '10-50 watt', inStock: true },
        { name: '50-100 watt', inStock: true },
        { name: '100-500 watt', inStock: true },
     
    ],
    description:
        'Loom Solar launches 10 watt solar panel for mobile charging using sun light. The panel is specially designed to charge small batteries up to 7 Ah or 7000 mAh. ',
    
    highlights: [
        'Output Power : 10 Watts',
        'Operating Voltage : 12 Volt',
        'Panel Technology: Poly Crystalline',
        'Manufacturer warranty: 5 years on Manufacturing defects',
    ],
    details:
    'The 10 watt, 12 volt solar panel will provide enough power to trickle charge a 12V vehicle or deep cycle battery. Helps run pumps, lights, fans, and small appliances such as stereos',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    const navigate = useNavigate();

    const handleAddToCart = ()=> {
        navigate("/cart")
    }
    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10' >
                    {/* Image gallery */}
                    <div className=" flex flex-col items-center ">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                src={product.images[0].src}
                                alt={product.images[0].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-5 justify-center">
                            {product.images.map((item) => <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>)}

                        </div>

                    </div>

                    {/* Product info */}
                    <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2 ">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">SunPower</h1>
                            <h1 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1'>
                                Solar Panel 20 watt - 12 volt for Small Battery Charging
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                                <p className='font-semibold'>
                                    Price:	Rs. 1,650
                                </p>
                                <p className='line-through'>Rs. 2500</p>
                                <p className='text-green-600 font-semibold'>34% OFF </p>

                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <div className='flex item-center space-x-3'>
                                <Rating name="read-only" value={4.5} readOnly />
                                <p className='opacity-50 text-sm'> 2546 Ratings </p>
                                <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 '> 200 Reviews</p>
                                </div>
                            
                            </div>

                            <form className="mt-10">
                                {/* Colors */}
                               

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Wattage</h3>
                                     
                                    </div>

                                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                            {product.sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                            {size.inStock ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'border' : 'border-2',
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        'pointer-events-none absolute -inset-px rounded-md'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                <Button onClick={handleAddToCart} variant="contained" sx={{px:"1rem" , py:"0.5rem",marginTop:"10px"}}>
                                
                                   Add To Cart
                                </Button>

                                
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/*Ratings and Reviews*/ }
                <section>
                    <h1 className='font-semibold text-lg pb-4'>
                        Recent Review & Rating
                    </h1>
                    <div className='border p-5'>
                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className='space-y-5'>
                                    <ProductReviewCard/>

                                </div>

                            </Grid>

                        </Grid>

                    </div>
                </section>

                {/*Similar products*/ } 
                <section className='pt-10'>
                    <h1 className='py-5 text-xl font-bold'>Similar Products</h1>
                    <div className='flex flex-wrap space-y-5 '>
                        {solar_panels.map((item)=><HomeSectionCard product={item}/>)}

                    </div>

                </section>



            </div>
        </div>
    )
}
