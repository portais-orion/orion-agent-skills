// Fixture deliberada: violação de ORION-SEC-001 (sem predicate de tenant/papel).
export function getInvoice(req, db) {
  return db.invoice.findUnique({ where: { id: req.params.id } });
}
