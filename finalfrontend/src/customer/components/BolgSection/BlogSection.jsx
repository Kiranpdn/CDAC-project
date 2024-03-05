const BlogSection = [
    {
      id: 1,
      title: 'Renewables and EVs: Myths and Reality',
      href: '#',
      description:
        'There is no doubt that Electric vehicles are a Global saviour for our planet against the pollution being caused by transportation. Reduced greenhouse emissions with EVs is supposed to be offering its accelerated benefits when fueled through renewables. The benefits of this combination thus are inevitable. But there are implementation challenges that places limits on the benefits. Renewables are not everywhere and are an intermittent source of power, and time to fuel the vehicles cannot be fixed or be based on renewable’s availability. Both the generation and consumption of energy thus cannot be synched with space, time and availability.',
      date: 'Aug 16, 2023',
      datetime: '2023-08-16',
      category: { title: '', href: '#' },
      author: {
        name: 'Dr. Prabhjot Kaur',
        role: 'Co-Founder / Esmito Solutions Pvt Limited',
        href: '#',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4DPtutUbtcvBB2O1n-jxPCu-jGHUG0OVnvhN3BXwldECKuC_AibcOr8g5HPFKDyOyts&usqp=CAU',
      },
    },
    {
        id: 1,
        title: 'Solar savings',
        href: '#',
        description:
          'Imagine a world without electricity — no lighting, heating or AC, television and so much more.Electricity is genuinely the most important part of daily life in modern society. With its massive and interconnected network, it ensures the reliable delivery of electricity to millions of homes, businesses and industries across the continental U.S. ',
        date: 'Mar 20, 2023',
        datetime: '2023-03-20',
        category: { title: '', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://marketplace.canva.com/EAFXS8-cvyQ/1/0/400w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-SsX0UeCGP8g.jpg',
        },
      },
      {
        id: 1,
        title: 'Energy Conservation & Demand-Side Management: The Route to Green Future',
        href: '#',
        description:
          'In an era of rising energy consumption and rapid resource depletion, the promotion of energy conservation and energy-efficient measures has become imperative. Tata Power Delhi Distribution Ltd (Tata Power – DDL) has emerged as a pioneer in this field, spearheading successful initiatives that not only benefit consumers but also contribute to the sustainability and efficiency of the power distribution system.',

        date: 'April 15, 2023',
        datetime: '2023-04-15',
        category: { title: '', href: '#' },
        author: {
          name: 'Dwijadas Basak',
          role: 'Chief Customer Experience- Commercial, Govt. Affairs, Corporate Communication, Tata Power- DDL',
          href: '#',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWf1TBaHtZEpKTYukgc_-XoWWQQiqyGAP6Lp01iWwAS8MXGFyK-iyjXm_jc-jpPDam-c&usqp=CAU',
        },
      },
    // More posts...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {BlogSection.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  