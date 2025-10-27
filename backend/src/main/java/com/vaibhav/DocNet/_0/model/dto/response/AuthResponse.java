package com.vaibhav.DocNet._0.model.dto.response;


import com.vaibhav.DocNet._0.model.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String refreshToken;
    private String type = "Bearer";
    private UserDTO user;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UserDTO {
        private String id;
        private String email;
        private String firstName;
        private String lastName;
        private String phoneNumber;
        private User.Role role;
        private String profileImage;
    }
}