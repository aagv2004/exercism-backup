public class Lasagna {
    // TODO: define the 'expectedMinutesInOven()' method
    public int expectedMinutesInOven() {
        return 40;
    }

    // TODO: define the 'remainingMinutesInOven()' method
    public int remainingMinutesInOven(int actualMinutes) {
        int expectedTime = new Lasagna().expectedMinutesInOven();
        return expectedTime - actualMinutes;
    }

    // TODO: define the 'preparationTimeInMinutes()' method
    public int preparationTimeInMinutes(int numberOfLayers) {
        return numberOfLayers * 2;
    }

    // TODO: define the 'totalTimeInMinutes()' method
    public int totalTimeInMinutes(int numberOfLayers, int actualMinutesInOven) {
        int preparationTime = new Lasagna().preparationTimeInMinutes(numberOfLayers);
        int total = actualMinutesInOven + preparationTime;
        return total;
    }
}
