package be.ehb.multec;

import java.util.Objects;

public class Woning extends WoningComponent {
    String woningAdress;
    int woningSurface;
    int woningPrice;

    public Garden gardenType;

    public Woning(String woningAdress, int woningSurface, int woningPrice) {
        this.woningAdress = woningAdress;
        this.woningSurface = woningSurface;
        this.woningPrice = woningPrice;
    }

    public String getWoningAdress() {
        return woningAdress;
    }

    public int getWoningSurface() {
        return woningSurface;
    }

    public int getWoningPrice() {
        return woningPrice;
    }

    public void displayWoningInfo() {
        System.out.println("Woningprijs: €" + getWoningPrice() + ", oppervlakte: " + getWoningSurface() + "m²" + ", adres: " + getWoningAdress() + ", garden: " + checkForGarden() +  "\n");
    }

    public String checkForGarden(){
        return gardenType.garden();
    }

    public void setGarden(Garden newGardenType) {
        gardenType = newGardenType;
    }

    @Override
    public String toString() {
        return "Woning{" +
                "woningAdress='" + woningAdress + '\'' +
                ", woningSurface=" + woningSurface +
                ", gardenType=" + checkForGarden() +
                ", woningPrice=" + woningPrice +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Woning woning = (Woning) o;
        return woningSurface == woning.woningSurface && woningPrice == woning.woningPrice && Objects.equals(woningAdress, woning.woningAdress) && Objects.equals(checkForGarden(), woning.checkForGarden());
    }

    @Override
    public int hashCode() {
        return Objects.hash(woningAdress, woningSurface, checkForGarden(), woningPrice);
    }
}
