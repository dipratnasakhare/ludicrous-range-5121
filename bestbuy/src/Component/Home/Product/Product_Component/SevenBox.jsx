import { Box, Text, Heading, Image } from "@chakra-ui/react";

import { motion } from "framer-motion";

import ViewStyle from "./CSS Box/SevenBox.module.css";

export default function ViewPage() {

  let inspired = [
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=272;maxWidth=400",
      name: 'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
      pricenew: "$899.99",
      priceold: "$999.99",
      start:"⭐⭐⭐⭐⭐"
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418603_sd.jpg;maxHeight=272;maxWidth=400",
      name: 'MacBook Pro 13.3" Laptop - Apple M1 chip - 8GB Memory - 512GB SSD - Space Gray',
      pricenew: "$1,049.99",
      priceold: "$1,499.99",
      start:"⭐⭐⭐⭐⭐"
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601_sd.jpg;maxHeight=272;maxWidth=400",
      name: "MacBook Pro 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray",
      pricenew: "$949.99",
      priceold: "$1,299.99",
      start:"⭐⭐⭐⭐"
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473765_sd.jpg;maxHeight=272;maxWidth=400",
      name: 'Apple - MacBook Pro 15.4" Intel Core i7,  8GB RAM - 256GB SSD (ME293LL/A) Late 2013 - Pre-Owned - Silver',
      pricenew: "$479.99",
      priceold: "$499.99",
      start:"⭐⭐⭐⭐"
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215943_sd.jpg;maxHeight=272;maxWidth=400",
      name: "Apple Watch Series 7 (GPS) 45mm (PRODUCT)RED Aluminum Case with (PRODUCT)",
      pricenew: "$359.00",
      priceold: "$429.00",
      start:"⭐⭐⭐"
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473765_sd.jpg;maxHeight=272;maxWidth=400",
      name: 'Apple - MacBook Pro 15.4" Intel Core i7,  8GB RAM - 256GB SSD (ME293LL/A) Late 2013 - Pre-Owned - Silver',
      pricenew: "$479.99",
      priceold: "$499.99",
      start:"⭐⭐⭐⭐"
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6339/6339741_sd.jpg;maxHeight=272;maxWidth=400",
      name: "Apple Watch Series 7 (GPS + Cellular) 41mm Green Aluminum Case with Clover Sport Band - Green",
      pricenew: "$369",
      priceold: "$499",
      start:"⭐⭐⭐⭐"
    },
  ];

  return (
    <Box className={ViewStyle.box}>
      <Box>
        <Box>
          <Heading color="white" p={2} mb={2} as='h1' size='2xl'>Apple Top Deals</Heading>
          <Heading color="yellow" as='h5' size='sm'>Shop all Apple Top Deals</Heading>
        </Box>
        <Box></Box>
      </Box>

      <Box className={ViewStyle.boxFlex}>
      <div className={ViewStyle.boxview}>
      <motion.div className={ViewStyle.carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -788 }}
          className={ViewStyle.inner}
        >
        {inspired.map((ele) => {
          return(
              <div>
                <div className={ViewStyle.boximg} key={ele.pricenew}>
                  <img
                    className={ViewStyle.imgslide}
                    src={ele.img}
                    alt="product"
                  />
                </div>
                <div className={ViewStyle.boxText}>
                  <Text color="blue">{ele.name}</Text>
                  <Text >{ele.start}</Text>
                  <Text >{ele.pricenew}</Text>
                  {/* <Text className={ViewStyle.price}>{ele.priceold}</Text> */}
                </div>
             </div>
          )
        })}</motion.div>
      </motion.div>
    </div>
      </Box>


    </Box>
  );
}
