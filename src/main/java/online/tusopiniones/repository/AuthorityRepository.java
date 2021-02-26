package online.tusopiniones.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import online.tusopiniones.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
