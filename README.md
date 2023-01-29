### ENV Files

- ship
  .env.development
  .env.production

- but keep secret
  .env.local

- if all 3 has same key then local will override both and based on command production or development will run
EX - `npm run dev || npm run build`
<hr />

### GetServerSideProps

- codedamn.com/dynamic -> getServerSideProps
  codedamn.com/static -> No getServerSideProps

- on build next marks
- SSR -> /dynamic (runs getServerSideProps login and render javascirpt code)
- static -> static (it will throw already generated page or html code)

- on build it will remember which files is using server side props
- then every instruction inside getServerSideProps will be executed first

- dynamic is similar to php

```php
<?php
// ...connect db
// ... fetch data
// ... display data
>
```

<hr />
- SSR works similar to it

```js
export async function getServerSideProps(context) {
  const db = await Database();
  const rows = await User.find({});
  return {
    props: { rows },
  };
}
```

<hr />
- Cons:

- now each time database gets connected and also gets data fetch each time that's mean it is resource intensive.
- Dynamic ssr get query of url with it also, to access `js context.query.dynamicname `
- I can redirect in ssr return instead of returning props

### GetStaticProps

- build pages on build time
- 20 static routes, 35 dynamic routes (eCommerce store -> 35 product)
- Incrementally/lazily build website.
- store/1 -> getStaticProps -> saved for other people (cache it in our server).
- store/99 -> serverd immediately as static page
- on build time -> static html + json
- we can use db calls, network req without beign cors binded .... require file with common js syntax or dynamic import
- static render has revalidate with props in return which takes number as value and it will build page again after that time

- live: 100k/seconds -> ssr -> 100k Req/database -bad
- live: 100k/seconds -> ssg(1 sec revalidate) -> 1 Req/database - super good

// last revalidate 0 now: 0 -> now - last < 10
// last revalidate 0 now: 5 -> now - last < 10
// last revalidate 0 now: 9 -> now - last < 10
// last revalidate 100 now: 102 -> 102 - 100 < 10 skip

<!-- * no other req nothing -->

- v: 1, 2, 3, 4 -> each new build is new version
- req: 1 2 3 4 5 6 7 8
- time 0 5 8 8 10 12 15
- ver: 1 1 1 1 1 - 2 2 ....
- it will at most generate only 1 page in 10 seconds not every 10 seconds
- if req is stop then it will stop work


### GetStaticPath