package online.tusopiniones.repository.search;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import online.tusopiniones.domain.User;


/**
 * Spring Data Elasticsearch repository for the User entity.
 */
public interface UserSearchRepository extends ElasticsearchRepository<User, String> {
}
