output "four_shells_lb_dns" {
  value = aws_lb.four_shells.dns_name
}

output "four_shells_public_content" {
  value = aws_cloudfront_distribution.four_shells_public_content.domain_name
}

output "key_admin" {
  value = aws_iam_access_key.admin.id
}

output "key_server" {
  value = aws_iam_access_key.server.id
}

output "secret_admin" {
  value = aws_iam_access_key.admin.secret
}

output "secret_server" {
  value = aws_iam_access_key.server.secret
}
