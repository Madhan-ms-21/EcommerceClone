package org.self.ecommerce.Repositories;

import org.self.ecommerce.Models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("SELECT r FROM Review r where r.product.id=:productId")
    public List<Review> getAllReviewsOfProduct(Long productId);
}
