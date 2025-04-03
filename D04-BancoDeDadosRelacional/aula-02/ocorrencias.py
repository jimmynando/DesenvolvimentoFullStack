import sqlalchemy as sa
import sqlalchemy.orm as orm

engine = sa.create_engine("sqlite:///aula-02/db/ocorrencias.db")

base = orm.declarative_base()

class DP(base):
  __tablename__ = "tb_dp"
  cod_dp = sa.Column(sa.INTEGER, primary_key = True, index = True)
  nome = sa.Column(sa.VARCHAR(100), nullable = False)
  endereco = sa.Column(sa.VARCHAR(255), nullable = False)

class Responsavel(base):
  __tablename__ = "tb_responsavel_dp"
  cod_dp = sa.Column(sa.INTEGER, primary_key = True, index = True)
  delegado = sa.Column(sa.VARCHAR(100), nullable = False)

class Municipio(base):
  __tablename__ = "tb_municipio"
  cod_ibge = sa.Column(sa.INTEGER, primary_key = True, index = True)
  municipio = sa.Column(sa.VARCHAR(100), nullable = False)
  regiao = sa.Column(sa.VARCHAR(25), nullable = False)

class Ocorrencias(base):
  __tablename__ = "tb_ocorrencias"
  id_registro = sa.Column(sa.INTEGER, primary_key = True, index = True)
  cod_dp = sa.Column(sa.INTEGER, sa.ForeignKey("tb_dp.cod_dp", ondelete = "NO ACTION", onupdate = "CASCADE"), index = True)
  cod_ibge = sa.Column(sa.INTEGER, sa.ForeignKey("tb_municipio.cod_ibge", ondelete = "NO ACTION", onupdate = "CASCADE"), index = True)
  ano = sa.Column(sa.CHAR(4), nullable = False)
  mes = sa.Column(sa.CHAR(2), nullable = False)
  ocorrencia = sa.Column(sa.VARCHAR(100), nullable = False)
  qtde = sa.Column(sa.INTEGER, nullable = False)

try:
  base.metadata.create_all(engine)
  print("Database created")
except ValueError:
  ValueError()


