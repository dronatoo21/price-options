import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {

    
        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "description": "Access to basic gym facilities",
            "price": 30.00,
            "features": [
              "Unlimited access to gym equipment",
              "Locker room access",
              "Fitness assessment",
              "Personal training (1 session/month)"
            ]
          },
          {
            "id": 2,
            "name": "Silver Membership",
            "description": "Access to advanced gym facilities",
            "price": 50.00,
            "features": [
              "Unlimited access to gym equipment",
              "Locker room access with towel service",
              "Fitness assessment",
              "Personal training (2 sessions/month)",
              "Group fitness classes"
            ]
          },
          {
            "id": 3,
            "name": "Gold Membership",
            "description": "Access to premium gym facilities",
            "price": 80.00,
            "features": [
              "Unlimited access to gym equipment",
              "Locker room access with towel service",
              "Fitness assessment and personalized workout plan",
              "Unlimited personal training sessions",
              "Group fitness classes",
              "Sauna and steam room access",
              "Nutrition consultation"
            ]
          }
        ];
      

    return (
        <div className="m-12">
            <h1 className="text-3xl text-center">best Prices of my gym</h1>
            <div className="md:grid md:grid-cols-3 gap-6 m-12">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}/>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;