package main.java;

public class Villa extends Woning{

    public Villa(String woningAdress, int woningSurface, int woningPrice) {
        super(woningAdress, woningSurface, woningPrice);

        gardenType = new HasABigGarden();

    }

    @Override
    public String toString() {
        return "Villa{" +
                "woningAdress='" + woningAdress + '\'' +
                ", woningSurface=" + woningSurface +
                ", woningPrice=" + woningPrice +
                ", gardenType=" + gardenType +
                '}';
    }
}
