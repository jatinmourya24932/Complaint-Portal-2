package com.complaintportal.security;

import java.nio.charset.StandardCharsets;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {

    @Value("${jwt.secret-key}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private long jwtExpiration;
    
    private SecretKey getSignInKey() {

        return Keys.hmacShaKeyFor(
                secretKey.getBytes(
                        StandardCharsets.UTF_8));

    }
    
    public String generateToken(String email) {

    	System.out.println(secretKey);
        return Jwts.builder()

                .subject(email)

                .issuedAt(new Date())

                .expiration(
                        new Date(
                                System.currentTimeMillis()
                                        + jwtExpiration))

                .signWith(getSignInKey())

                .compact();

    }
    
    public String extractUsername(
            String token) {

        return extractClaim(
                token,
                Claims::getSubject);

    }
    
    public <T> T extractClaim(
            String token,
            Function<Claims, T> resolver) {

        Claims claims =
                Jwts.parser()

                        .verifyWith(
                                getSignInKey())

                        .build()

                        .parseSignedClaims(
                                token)

                        .getPayload();
        System.out.println(secretKey);
        return resolver.apply(
                claims);

    }
    
    public Date extractExpiration(
            String token) {

        return extractClaim(
                token,
                Claims::getExpiration);

    }
    
    private boolean isTokenExpired(
            String token) {

        return extractExpiration(
                token)

                .before(
                        new Date());

    }
    
    public boolean isTokenValid(
            String token,
            String email) {

        String username =
                extractUsername(
                        token);

        return username.equals(
                email)

                && !isTokenExpired(
                        token);

    }

}