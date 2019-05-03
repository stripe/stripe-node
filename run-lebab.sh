#!/usr/bin/env bash
set -eu -o pipefail

transforms=(
  "arrow"
  "for-of"
  "for-each"
  "arg-rest"
  "arg-spread"
  "obj-method"
  "obj-shorthand"
  "multi-var"
  "let"
  "template"
  "default-param"
  "destruct-param"
  "includes"
)

# don't want lebab to operate on these, too slow.

for transform in "${transforms[@]}"; do
  echo
  echo "$transform"
  
  commit_message="lebab transform: $transform"
  
  commit_message_regex=' '$commit_message"[[:>:]]"
  if [[ "$(git log -20 --oneline)" =~ $commit_message_regex ]]; then
    echo "skipping because commit exists"
    continue
  fi

  yarn lebab -t "$transform" --replace "lib/"
  yarn lebab -t "$transform" --replace "test/"
  yarn lebab -t "$transform" --replace "testUtils/"
  yarn lebab -t "$transform" --replace "examples/"
  yarn fix

  yarn mocha
  git add -A .
  git commit --allow-empty -m "$commit_message"
  echo "Done with $transform"
  echo
done

git push
