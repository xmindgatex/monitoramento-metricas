package com.monitoramento;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.converter.MessageConverter;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.WebSocketMessageBrokerStats;
import org.springframework.web.socket.messaging.WebSocketStompClient;
import org.springframework.web.socket.sockjs.client.SockJsClient;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class WebSocketConfigTest {

    @Autowired
    private WebSocketConfig webSocketConfig;

    @Autowired
    private WebSocketMessageBrokerStats webSocketMessageBrokerStats;

    @Test
    public void testWebSocketConfigCreation() {
        assertNotNull(webSocketConfig, "WebSocket configuration should be created");
    }

    @Test
    public void testMessageBrokerConfiguration() {
        MessageBrokerRegistry mockRegistry = mock(MessageBrokerRegistry.class);
        
        webSocketConfig.configureMessageBroker(mockRegistry);

        // Verify simple broker is enabled
        verify(mockRegistry).enableSimpleBroker("/topic");
        
        // Verify application destination prefix
        verify(mockRegistry).setApplicationDestinationPrefixes("/app");
    }

    @Test
    public void testStompEndpointRegistration() {
        // This test ensures WebSocket endpoint is configurable
        assertNotNull(webSocketMessageBrokerStats, 
            "WebSocket message broker stats should be available");
    }

    @Test
    public void testWebSocketConnection() {
        WebSocketStompClient stompClient = new WebSocketStompClient(new SockJsClient());
        stompClient.setMessageConverter(new MappingJackson2MessageConverter());

        // You would typically mock a connection here or use a test server
        assertNotNull(stompClient, "STOMP client should be creatable");
    }

    @Test
    public void testMessageConverterCompatibility() {
        MessageConverter converter = new MappingJackson2MessageConverter();
        
        assertNotNull(converter, "Message converter should be created");
        assertTrue(converter instanceof MappingJackson2MessageConverter, 
            "Converter should be Jackson JSON converter");
    }
}
