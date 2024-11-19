@Service
public class MetricsGeneratorService {
    private static final Random RANDOM = new Random();

    public Metric generateMetrics() {
        return new Metric(
            generateCpuUsage(), 
            generateMemoryUsage(), 
            generateLatency()
        );
    }

    private int generateCpuUsage() {
        return RANDOM.nextInt(101);
    }

    private int generateMemoryUsage() {
        return RANDOM.nextInt(101);
    }

    private int generateLatency() {
        return RANDOM.nextInt(451) + 50;
    }

    public boolean checkAlerts(Metric metric) {
        return metric.getCpu() > 80 || 
               metric.getMemory() > 75 || 
               metric.getLatency() > 200;
    }
}