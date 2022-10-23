function streetShop(input) {
    let food = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    if (city == "Sofia") {
        if (food == "coffee") {
            bill = 0.50 * quantity;
        } else if (food == "water") {
            bill = 0.80 * quantity;
        } else if (food == "beer") {
            bill = 1.20 * quantity;
        } else if (food == "sweets") {
            bill = 1.45 * quantity;
        } else if (food == "peanuts") {
            bill = 1.60 * quantity;
        }
    } else if (city == "Plovdiv") {
        if (food == "coffee") {
            bill = 0.40 * quantity;
        } else if (food == "water") {
            bill = 0.70 * quantity;
        } else if (food == "beer") {
            bill = 1.15 * quantity;
        } else if (food == "sweets") {
            bill = 1.30 * quantity;
        } else if (food == "peanuts") {
            bill = 1.50 * quantity;
        } 
    } else if (city == "Varna") {
        if (food == "coffee") {
            bill = 0.45 * quantity;
        } else if (food == "water") {
            bill = 0.70 * quantity;
        } else if (food == "beer") {
            bill = 1.10 * quantity;
        } else if (food == "sweets") {
            bill = 1.35 * quantity;
        } else if (food == "peanuts") {
            bill = 1.55 * quantity;
        }
    }

    console.log(bill)
}
streetShop(["coffee", "Varna", "2"])