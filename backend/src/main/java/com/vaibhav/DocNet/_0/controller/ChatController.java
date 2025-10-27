package com.vaibhav.DocNet._0.controller;
import com.vaibhav.DocNet._0.model.dto.response.ApiResponse;
import com.vaibhav.DocNet._0.model.entity.ChatMessage;
import com.vaibhav.DocNet._0.repository.ChatMessageRepository;
import com.vaibhav.DocNet._0.security.CustomUserDetails;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
@Tag(name = "Chat", description = "Chat messaging APIs")
@SecurityRequirement(name = "Bearer Authentication")
public class ChatController {

    private final ChatMessageRepository chatMessageRepository;

    @PostMapping("/send")
    @Operation(summary = "Send message")
    public ResponseEntity<ApiResponse<ChatMessage>> sendMessage(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody ChatMessage message) {

        message.setSenderId(userDetails.getId());
        ChatMessage saved = chatMessageRepository.save(message);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Message sent", saved));
    }

    @GetMapping("/conversation/{userId}")
    @Operation(summary = "Get conversation with user")
    public ResponseEntity<ApiResponse<List<ChatMessage>>> getConversation(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @PathVariable String userId) {

        List<ChatMessage> messages = chatMessageRepository.findConversation(
                userDetails.getId(), userId);
        return ResponseEntity.ok(ApiResponse.success("Conversation retrieved", messages));
    }

    @GetMapping("/unread")
    @Operation(summary = "Get unread messages")
    public ResponseEntity<ApiResponse<List<ChatMessage>>> getUnreadMessages(
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        List<ChatMessage> messages = chatMessageRepository.findByReceiverIdAndReadFalse(
                userDetails.getId());
        return ResponseEntity.ok(ApiResponse.success("Unread messages", messages));
    }

    @GetMapping("/unread-count")
    @Operation(summary = "Get unread message count")
    public ResponseEntity<ApiResponse<Long>> getUnreadCount(
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        long count = chatMessageRepository.countByReceiverIdAndReadFalse(userDetails.getId());
        return ResponseEntity.ok(ApiResponse.success("Unread count", count));
    }
}