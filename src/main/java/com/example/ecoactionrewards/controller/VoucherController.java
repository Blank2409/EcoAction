package com.example.ecoactionrewards.controller;

import com.example.ecoactionrewards.service.VoucherDTO;
import com.example.ecoactionrewards.service.VoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vouchers")
public class VoucherController {

    @Autowired
    private VoucherService voucherService;

    @GetMapping
    public List<VoucherDTO> getAllVouchers() {
        return voucherService.getAllVouchers();
    }

    @PostMapping("/redeem/{voucherId}")
    public ResponseEntity<String> redeemVoucher(@PathVariable Long voucherId) {
        voucherService.redeemVoucher(voucherId);
        return ResponseEntity.ok("Voucher redeemed successfully");
    }
}