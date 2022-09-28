from pyscf import gto, scf
from pyscf.tools import cubegen

mol = gto.M(atom="h2o.xyz", basis="sto-3g")
mf = scf.RHF(mol).run()

n = 16

for i, mo in enumerate(mf.mo_coeff.T):
    cubegen.orbital(mol, f'cubes/h2o_mo_{i}.cube', mo, nx=n, ny=n, nz=n)
