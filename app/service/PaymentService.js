import RNIap,{purchaseUpdatedListener} from 'react-native-iap';

export const purchased = async (productId) => {
  let isPurchased = false;
  try{
      const purchases = await RNIap.getAvailablePurchases();

      purchases.forEach((purchases) =>{
          if(purchases.productId === productId){
              isPurchased = true;
              return;
          }
      })

      return isPurchased;

  }catch(error){
    return false;
  }
};

export const requestPurschase = async (productId) => {
    try{
        await RNIap.requestSubscription(productId);
    }catch(error){
    }
};

export const fetchAvailableProducts = async (productsIds) => {
    try{
        await RNIap.initConnection();
        await RNIap.getProducts(productsIds);
    }catch(error){
        console.log(error);
    }
};

export const purchaseUpdateSubscription = async () => {
    
    purchaseUpdatedListener(async (purchase) => {
        const receipt = purchase.transactionReceipt;

        if(receipt){
            await RNIap.finishTransaction(purchase);
        }
    })
};