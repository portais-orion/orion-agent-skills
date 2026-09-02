// Fixture deliberadamente conforme: autorização por tenant/papel explícita antes do acesso.
export function getInvoice(req, db) {
  const { tenantId, role } = req.auth;
  if (!tenantId || role !== 'BILLING_VIEWER') {
    throw new ForbiddenError('acesso negado ao recurso de fatura');
  }
  return db.invoice.findFirst({ where: { id: req.params.id, tenantId } });
}
