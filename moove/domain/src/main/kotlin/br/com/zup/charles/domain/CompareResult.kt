/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

package br.com.zup.charles.domain

data class CompareResult(
    val repository: String,
    val baseBranch: String,
    val headBranch: String,
    val aheadBy: Int,
    val behindBy: Int
)