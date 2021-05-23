package main.java;
import java.util.ArrayList;
import java.util.Iterator;


public class WoningGroup extends WoningComponent {
    ArrayList woningComponents = new ArrayList();

    String woningGroupType;
    String woningGroupDescription;


    public WoningGroup(String woningGroupType, String woningGroupDescription) {
        this.woningGroupType = woningGroupType;
        this.woningGroupDescription = woningGroupDescription;
    }

    public String getWoningGroupType() {
        return woningGroupType;
    }

    public String getWoningGroupDescription() {
        return woningGroupDescription;
    }

    public void add(WoningComponent newWoningComponent) {
        woningComponents.add(newWoningComponent);
    }

    public void remove(WoningComponent newWoningComponent) {
        woningComponents.remove(newWoningComponent);
    }

    public WoningComponent getComponent(int componentIndex) {
        return (WoningComponent) woningComponents.get(componentIndex);
    }

    public void displayWoningInfo() {
        System.out.println(getWoningGroupType() + "\n" + getWoningGroupDescription() + "\n");

        Iterator <WoningComponent> woningIterator = woningComponents.iterator();
        if (woningIterator.hasNext() == true){
            while(woningIterator.hasNext()){
                WoningComponent woningInfo = woningIterator.next();
                woningInfo.displayWoningInfo();
            }
        }else{
            throw new IllegalArgumentException("Is empty");
        }

    }


    @Override
    public String toString() {
        return "WoningGroup{" +
                "woningComponents=" + woningComponents +
                ", woningGroupType='" + woningGroupType + '\'' +
                ", woningGroupDescription='" + woningGroupDescription + '\'' +
                '}';
    }

}
