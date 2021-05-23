package main.java;

public abstract class WoningComponent {

    public void add(WoningComponent newWoningComponent){
        throw new UnsupportedOperationException();
    }

    public void remove(WoningComponent newWoningComponent){
        throw new UnsupportedOperationException();
    }

    public WoningComponent getComponent(int componentIndex){
        throw new UnsupportedOperationException();
    }

    public String getWoningAdress(){
        throw new UnsupportedOperationException();
    }

    public int getWoningPrice(){
        throw new UnsupportedOperationException();
    }

    public int getWoningSurface(){
        throw new UnsupportedOperationException();
    }

    public void displayWoningInfo(){
        throw new UnsupportedOperationException();
    }

}
