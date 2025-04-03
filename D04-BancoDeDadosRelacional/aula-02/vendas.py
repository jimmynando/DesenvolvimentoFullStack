import sqlalchemy as sa
import sqlalchemy.orm as orm

engine = sa.create_engine("sqlite:///aula-02/db/vendas.db")

base = orm.declarative_base()

class Cliente(base):
  __tablename__ = "cliente"
  cpf = sa.Column(sa.CHAR(14), primary_key = True, index = True)
  nome = sa.Column(sa.VARCHAR(100), nullable = False)
  email = sa.Column(sa.VARCHAR(50), nullable = False)
  genero = sa.Column(sa.CHAR(1))
  salario = sa.Column(sa.DECIMAL(10, 2))
  dia_mes_aniversario = sa.Column(sa.DateTime)
  bairro = sa.Column(sa.VARCHAR(50))
  cidade = sa.Column(sa.VARCHAR(50))
  uf = sa.Column(sa.CHAR(2))

class Fornecedor(base):
  __tablename__ = "fornecedor"
  registro_fornecedor = sa.Column(sa.INTEGER, primary_key = True, index = True)
  nome_fantasia = sa.Column(sa.VARCHAR(50), nullable = False)
  razao_social = sa.Column(sa.VARCHAR(100), nullable = False)
  cidade = sa.Column(sa.VARCHAR(50), nullable = False)
  uf = sa.Column(sa.CHAR(2))

class Produto(base):
  __tablename__ = "produto"
  cod_barras = sa.Column(sa.INTEGER, primary_key = True, index = True)
  registro_fornecedor = sa.Column(sa.INTEGER, sa.ForeignKey("fornecedor.registro_fornecedor", ondelete = "NO ACTION", onupdate = "CASCADE"), index = True)
  dsc_produto = sa.Column(sa.VARCHAR(100), nullable = False)
  genero = sa.Column(sa.CHAR(1))

class Vendedor(base):
  __tablename__ = "vendedor"
  registro_vendedor = sa.Column(sa.INTEGER, primary_key = True, index = True)
  cpf = sa.Column(sa.CHAR(14), primary_key = True, index = True)
  nome = sa.Column(sa.VARCHAR(100), nullable = False)
  email = sa.Column(sa.VARCHAR(50), nullable = False)
  genero = sa.Column(sa.CHAR(1))

class Venda(base):
  __tablename__ = "venda"
  id_transacao = sa.Column(sa.INTEGER, primary_key = True, index = True)
  cpf_cliente = sa.Column(sa.CHAR(14), sa.ForeignKey("cliente.cpf", ondelete = "NO ACTION", onupdate = "CASCADE"), index = True)
  registro_vendedor = sa.Column(sa.INTEGER, sa.ForeignKey("vendedor.registro_vendedor", ondelete = "NO ACTION", onupdate = "CASCADE"), index = True)
  cod_barras = sa.Column(sa.INTEGER, sa.ForeignKey("produto.cod_barras", ondelete = "NO ACTION", onupdate = "CASCADE"), index = True)
  data_hora = sa.Column(sa.DateTime)
  valor_venda = sa.Column(sa.DECIMAL(10, 2))

try:
  base.metadata.create_all(engine)
  print("Database created")
except ValueError:
  ValueError()

