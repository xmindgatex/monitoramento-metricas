import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class MetricsGeneratorServiceTest {
    @Test
    public void testMetricGeneration() {
        MetricsGeneratorService service = new MetricsGeneratorService();
        Metric metric = service.generateMetrics();
        
        assertTrue(metric.getCpu() >= 0 && metric.getCpu() <= 100);
        assertTrue(metric.getMemory() >= 0 && metric.getMemory() <= 100);
        assertTrue(metric.getLatency() >= 50 && metric.getLatency() <= 500);
    }
}
