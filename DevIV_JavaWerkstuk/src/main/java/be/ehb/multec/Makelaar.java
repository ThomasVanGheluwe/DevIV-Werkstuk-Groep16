package main.java;

import java.util.Objects;

public class Makelaar {
    WoningComponent woningList;

    public Makelaar(WoningComponent newWoningList) {
        this.woningList = newWoningList;
    }

    public void getWoningList(){
        woningList.displayWoningInfo();
    }

    @Override
    public String toString() {
        return "Makelaar{" +
                "woningList=" + woningList +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Makelaar makelaar = (Makelaar) o;
        return Objects.equals(woningList, makelaar.woningList);
    }

    @Override
    public int hashCode() {
        return Objects.hash(woningList);
    }
}
