package com.saudepluplus.domain;


import javax.persistence.*;

import java.io.Serializable;

/**
 * A Consulta.
 */
@Entity
@Table(name = "consulta")
public class Consulta implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "preco")
    private Double preco;

    @Column(name = "codigo")
    private String codigo;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public Consulta descricao(String descricao) {
        this.descricao = descricao;
        return this;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getPreco() {
        return preco;
    }

    public Consulta preco(Double preco) {
        this.preco = preco;
        return this;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getCodigo() {
        return codigo;
    }

    public Consulta codigo(String codigo) {
        this.codigo = codigo;
        return this;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Consulta)) {
            return false;
        }
        return id != null && id.equals(((Consulta) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Consulta{" +
            "id=" + getId() +
            ", descricao='" + getDescricao() + "'" +
            ", preco=" + getPreco() +
            ", codigo='" + getCodigo() + "'" +
            "}";
    }
}