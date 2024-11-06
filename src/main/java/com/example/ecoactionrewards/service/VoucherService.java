package com.example.ecoactionrewards.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoucherService {

    @Autowired
    private VoucherRepository voucherRepository;

    public List<VoucherDTO> getAllVouchers() {
        // Implement logic to fetch vouchers from the repository
        // For now, we'll return dummy data
        return List.of(
            new VoucherDTO(1L, "10% Off Eco-friendly Products", "Get 10% off on selected eco-friendly products", 500),
            new VoucherDTO(2L, "Free Tree Planting Kit", "Redeem a free tree planting kit", 1000),
            new VoucherDTO(3L, "Recycling Workshop", "Join a free recycling workshop", 750)
        );
    }

    public void redeemVoucher(Long voucherId) {
        // Implement logic to redeem the voucher
        // For now, we'll just log the action
        System.out.println("Redeemed voucher with ID: " + voucherId);
    }
}